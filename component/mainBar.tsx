import react from "react";
import Image from "next/image";
import Link from "next/link";

const MainBar = (props) => {
  const navlinkbgcolor = props.navcolor;
  return (
    <>
      <div className="container-fluid">
        <ul className="nav nav-pills nav-fill">
          {props?.Data?.map((items, index) => {
            return (
              <li key={index} id={props.liidselect}className="nav-item ">
                <Link href={items.path}>
                  <button
                    className={items.cname ? items.cname : navlinkbgcolor}
                    data-bs-toggle="pill"
                    id={items.idname}
                  >
                    {items.title}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainBar;
