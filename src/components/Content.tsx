import React from "react";
import Search from "./Search/Search";

const Content = () => {
  return (
    <div className="content-wrap">
      <div className="navbar-logo">
        <img src="https://s3-alpha-sig.figma.com/img/e844/4ff2/56f933855ffa630db6ae0594386f86a0?Expires=1700438400&Signature=QQz~9zqOrN6WDPQjRw4ppb7OWH9OpWL6mlxb38YCg-6EyYsVuDjGaACWzg2sBZWucjWUW9nt~2aIGktOTIAyJzE5LVY4zjUlxkzd7Aiwhm6sahd~sFDQRnpx2JnZ5aGl6vdVxlWwGgbjvd9nwpFfs-Y-mx6CSRurpbq7RjzkCPVwKAaxPSFfbTc2LZLvnnrHdc7gnRr5CmUrGr0dT0b1qo72BsAxJ35j4MpEOvtlICLivt6Z0JY0nwDbtyy2MJxoex1HZyMazYVVQuDcDlrUlznOpE0bliMc1IubVKPxkFA9kKiouSmdBD2~r1hVq6bD8z94TmYJEjKeE8Tjt7JgXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      </div>
      <div className="search-menu-container">
        <Search />
      </div>
    </div>
  );
};

export default Content;
