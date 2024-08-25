import Profile from "./components/profile";
import "./App.css";
import ProfilePhoto from "./components/profilePhoto";

function AppProfile() {
  const handleclick = (event) => {
    console.log(event);
    alert("클리킄");
  };
  return (
    <>
      <button onClick={handleclick}>버튼</button>
      <ProfilePhoto
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nW_xiWgKUQb_4v_LeU-CdgGTSjwyqWj2aA&s"
        name="Sing Cat"
        desc="Singing in the Cat"
        isNew="true"
      />
      <Profile
        url="https://i.ytimg.com/vi/5SJlgXa7fhM/maxresdefault.jpg"
        name="Super Cat"
        desc="Im King cat"
        isNew="true"
      />
      <Profile
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfX0aWEZrigwTS4o51TbBPX6_B3IpILI1kBA&s"
        name="Nova Cat"
        desc="Im Nova cat"
      />
      <Profile
        url="https://pzip.kr/wp-content/uploads/2023/11/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-4-3.webp"
        name="Sun Cat"
        desc="Im Sun cat"
      />
    </>
  );
}

export default AppProfile;
