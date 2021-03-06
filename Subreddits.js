import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { fetchSubreddits, selectSubreddits } from "../../store/subRedditSlice";
import './Subreddits.css';
import {
    setSelectedSubreddit,
    selectSelectedSubreddit,
} from '../../store/redditSlice';

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSubreddits);

useEffect(() => {
    dispatch(fetchSubreddits());
}, [dispatch]);

return (
    <Card className="subreddit-card">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Subreddits;