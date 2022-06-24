import React, { useEffect, useeffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  fetchComments,
} from '../../store/redditSlice';
import './Home.css';

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permaLink) => {
            dispatch(fetchComments(index, permaLink));
        };
        return getComments;
    };
};

export default Home;