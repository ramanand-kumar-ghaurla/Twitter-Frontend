import React from "react";
import { Loader, ProfileCard } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";
import { fetchulkProfile } from "../../Features/bulkProfile";

function ProfileSideBar() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.bulkProfiles);
  console.log('profiles',profiles)

  const isLoadMore = () => {
    if (profiles.hasMore) {
      dispatch(fetchulkProfile(profiles.pageNo + 1)); // Increment pageNo
    }
  };

  if (profiles.isLoading && profiles.pageNo === 1) return <Loader />;

  if (profiles.isError) {
    return (
      <div className="h-full flex justify-center items-center">
        <h1 className="font-bold text-2xl">Error in fetching profiles</h1>
      </div>
    );
  }

  if (!profiles.profiles.length && !profiles.isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <h1 className="font-bold text-2xl">No Profile to Show</h1>
      </div>
    );
  }

  return (
    <>
     <div className=" h-screen overflow-y-scroll pb-10 mx-auto">
     {profiles.profiles.map((profile) => (
        <ProfileCard
          fullName={profile.fullName}
          username={profile.username}
          alreadyFollow={profile.followStatus}
          key={profile.username}
          avtarURL={profile?.avtar?.url }

        />
      ))}

      <div className="mx-auto w-full pb-10">
        {profiles.hasMore && (
          <Button
            children="See More"
            variant="filled"
            color="blue"
            size="lg"
            className="rounded-full mx-auto "
            onClick={isLoadMore}
            disabled={profiles.isLoading}
          />
        )}
      </div>
     </div>
    </>
  );
}

export default ProfileSideBar;
