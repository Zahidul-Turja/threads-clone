import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

function UserPage() {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk about threades."
      />
      <UserPost
        likes={454}
        replies={4}
        postImg="/post2.png"
        postTitle="Nice Tutorial"
      />
      <UserPost
        likes={567}
        replies={32}
        postImg="/post3.png"
        postTitle="I hate this guy"
      />
      <UserPost likes={567} replies={32} postTitle="This is my first thread." />
    </>
  );
}

export default UserPage;
