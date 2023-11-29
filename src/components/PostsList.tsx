/* eslint-disable max-len */
import classNames from 'classnames';
import React from 'react';
import { Post } from '../types/Post';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { actions as selectedPostActions } from '../features/selectedPost/selectedPostSlice';

type Props = {
  posts: Post[],
};

export const PostsList: React.FC<Props> = ({
  posts,
}) => {
  const selectedPost = useAppSelector((state) => state.selectedPost);
  const dispatch = useAppDispatch();

  const showDetails = (post: Post) => (post.id !== selectedPost?.id
    ? dispatch(selectedPostActions.set(post))
    : dispatch(selectedPostActions.clear()));

  return (
    <div data-cy="PostsList">
      <p className="title">Posts:</p>

      <table className="table is-fullwidth is-striped is-hoverable is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {posts.map(post => (
            <tr key={post.id} data-cy="Post">
              <td data-cy="PostId">{post.id}</td>
              <td data-cy="PostTitle">{post.title}</td>
              <td className="has-text-right is-vcentered">
                <button
                  type="button"
                  data-cy="PostButton"
                  className={classNames(
                    'button',
                    'is-link',
                    {
                      'is-light': post.id !== selectedPost?.id,
                    },
                  )}
                  onClick={() => {
                    showDetails(post);
                  }}
                >
                  {post.id === selectedPost?.id ? 'Close' : 'Open'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};