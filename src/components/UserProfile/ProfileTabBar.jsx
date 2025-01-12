import React, { useState } from 'react';
import api from '../../helperFunction/axios';
import { ProfileCard,Loader, TweetCard } from '../index';
import { useSelector } from 'react-redux';

 
 

function ProfileTabBar() {
  const [activeTab, setActiveTab] = useState('Posts');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {profileData} = useSelector((state)=> state.profile)
  // console.log('profile in profile page',profileData)
 
  const posts = profileData?.posts
  const username = String(profileData?.username)
  
 
 

  const getFollowAndFollowing = async (tabName, request, username) => {
    setActiveTab(tabName);
    setLoading(true);
    console.log('username in get follow',username)
    try {
      const response = await api.get(`/follow-service/get-${request}/${username}`, {
       
      });
      const responseData = response.data.data;
      setData(responseData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <Loader className=' mt-[50%]'/>
    }

    if (activeTab === 'Posts') {
      return posts ? (
        posts.length > 0 ? (
          posts.map((post)=>(
          <TweetCard 
            content={post.content}
            commentCount={post.comments}
            likeCount={post.likes}
            fullName={profileData.fullName}
            username={profileData.fullName}
            viewCount={post.views}
            tweetId={post._id}
            key={post._id}
          />
          ))
        ) : (<h1>`{profileData.username} Don't Have Post Yet`</h1>)
      ):( <h1 className='font-bold text-2xl text-center mt-[50%]' >No Posts Available</h1>)
    }

    if (activeTab === 'Followers') {
      return data.length > 0 ? (
        data.map((follower) =>
          follower.follower ? (
            <ProfileCard
              key={follower._id}
              fullName={follower.follower.fullName}
              username={follower.follower.username}
              
            />
          ) : null
        )
      ) : (
        <h1 className='font-bold text-2xl text-center mt-[50%]'>User doesn't have any Followers</h1>
      );
    }

    if (activeTab === 'Following') {
      return data.length > 0 ? (
        data.map((following) =>
          following.following ? (
            <ProfileCard
              key={following._id}
              fullName={following.following.fullName}
              username={following.following.username}

            />
          ) : null
        )
      ) : (
        <h1 className='font-bold text-2xl text-center mt-[50%]'>User doesn't have any Following Profiles</h1>
      );
    }

    return null;
  };

  return (
    <>
      <div className="mt-8 pl-6 pr-6 border-b-[2px]">
        <ul className="flex justify-between">
          <li
            onClick={() => {
              setActiveTab('Posts');
              setData([]); // Clear data if switching to Posts
            }}
            className={`cursor-pointer pb-4 font-light ${
              activeTab === 'Posts' ? 'font-bold border-b-4 pb-4 border-light-blue-600' : ''
            }`}
          >
            Posts
          </li>
          <li>
            <button
              className={`cursor-pointer pb-4 font-light ${
                activeTab === 'Followers' ? 'font-bold border-b-4 pb-4 border-light-blue-600' : ''
              }`}
              onClick={() => getFollowAndFollowing('Followers', 'follower', `${username}`)}
            >
              Followers
            </button>
          </li>
          <li>
            <button
              className={`cursor-pointer pb-4 font-light ${
                activeTab === 'Following' ? 'font-bold border-b-4 pb-4 border-light-blue-600' : ''
              }`}
              onClick={() => getFollowAndFollowing('Following', 'following',` ${username}`)}
            >
              Following
            </button>
          </li>
        </ul>
      </div>

      <div className="w-full">{renderContent()}</div>
    </>
  );
}

export default ProfileTabBar;
