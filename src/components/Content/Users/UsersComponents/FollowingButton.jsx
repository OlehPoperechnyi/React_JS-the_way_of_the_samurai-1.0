
const FollowingButton = ({followed, userId, followingInProgress, doChangeFollowing}) => {
    return <div>
        <button disabled={followingInProgress.some(id => id === userId)}
                onClick={() => doChangeFollowing(userId, !followed)}>
            {!followed ? "follow" : "unfollow"}
        </button>
    </div>
};
export default FollowingButton;