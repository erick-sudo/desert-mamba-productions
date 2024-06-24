"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { usePathname } from "next/navigation";
import {
  FilmIcon,
  HomeIcon,
  XMarkIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";
import { styled } from "@mui/material";
import Link from "next/link";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import AppProvider from "../components/context/AppContext";
import { capitalize } from "../lib/utils";
import { MusicIcon, TvIcon } from "@vidstack/react/icons";
import { LiveTv } from "@mui/icons-material";
import { NavButton } from "../components/nav/nav-button";
import { TopAppBar } from "../components/nav/top-app-bar";

const navItems = [
  {
    title: "Documentaries",
    icon: <FilmIcon height={20} />,
    path: "documentaries",
  },
  {
    title: "Music",
    icon: <MusicIcon height={20} />,
    path: "music",
  },
  {
    title: "Shows",
    icon: <TvIcon height={20} />,
    path: "shows",
  },
];

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "white",
    color: "rgba(99, 70, 241)",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "white",
    color: "#b23c17",
  },
  "&.notistack-MuiContent-warning": {
    backgroundColor: "white",
    color: "#ffc107",
  },
  "&.notistack-MuiContent-info": {
    backgroundColor: "white",
    color: "#00e5ff",
  },
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hide, setHide] = React.useState(true);

  const pathName = usePathname();

  const segments = pathName.split("/").slice(1);

  const toggleDrawer = (flag: boolean) => {
    setHide(flag);
  };

  const smallScreenNavigationDrawerPopUpSprings = useSpring({
    from: {
      opacity: 0,
      translateX: "-100%",
    },
    to: {
      opacity: hide ? 0 : 1,
      translateX: hide ? "-100%" : "0%",
    },
    config: { tension: 200, friction: 10 },
  });

  const breadcrumbs = segments.map((segment, idx) =>
    idx === segments.length - 1 ? (
      <Typography component="div" className="text-cyan-700" key={idx}>
        {capitalize(segment)}
      </Typography>
    ) : (
      <Link
        className="hover:underline"
        color="inherit"
        href={`/${segments.slice(0, idx + 1).join("/")}`}
        key={idx}
      >
        {capitalize(segment)}
      </Link>
    )
  );

  return (
    <SnackbarProvider
      Components={{
        success: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
    >
      <AppProvider>
        <div className="fixed inset-0 flex flex-col">
          {/* ============ Top App Bar ============= */}
          <TopAppBar updateDrawer={toggleDrawer} expandSideNav={hide} />

          <div className="flex flex-grow">
            {/* ============ Large Screen ============ */}
            <div className="hidden border-r border-zinc-700/40 p-1 md:flex flex-col gap-1">
              <Link
                className="cyan-hover p-1 rounded"
                key={"home-tab"}
                href={`/content`}
              >
                <NavButton
                  text="Home"
                  icon={<HomeIcon height={20} />}
                  active={["/content", "/content/"].includes(pathName)}
                  hideText={hide}
                />
              </Link>
              {navItems.map((navItem, index) =>
                !navItem ? (
                  // <HtmlTooltip
                  //   key={index}
                  //   arrow
                  //   slotProps={{
                  //     arrow: {
                  //       sx: {
                  //         color: "white",
                  //       },
                  //     },
                  //   }}
                  //   title={
                  //     <div className="py-2">
                  //       {navItem.submenu.items.map((subMenuItem, idx) => (
                  //         <Link
                  //           style={{
                  //             display: "block",
                  //           }}
                  //           replace={true}
                  //           key={`${index}#${idx}`}
                  //           className="text-cyan-800"
                  //           href={`/content/${subMenuItem.path}`}
                  //         >
                  //           <NavButton
                  //             text={subMenuItem.title}
                  //             icon={subMenuItem.icon}
                  //             active={false}
                  //             hideText={false}
                  //           />
                  //         </Link>
                  //       ))}
                  //     </div>
                  //   }
                  //   placement="right-end"
                  // >
                  //   <div>
                  //     <NavButton
                  //       text={navItem.title}
                  //       icon={navItem.icon}
                  //       active={pathName.startsWith(
                  //         `/content${
                  //           navItem.path ? "/" + navItem.path : ""
                  //         }`
                  //       )}
                  //       hideText={hide}
                  //     />
                  //   </div>
                  // </HtmlTooltip>
                  <></>
                ) : (
                  <Link
                    className="cyan-hover p-1 rounded"
                    key={index}
                    href={`/content/${navItem.path}`}
                  >
                    <NavButton
                      text={navItem.title}
                      icon={navItem.icon}
                      active={pathName.startsWith(
                        `/content${navItem.path ? "/" + navItem.path : ""}`
                      )}
                      hideText={hide}
                    />
                  </Link>
                )
              )}
              <div className="flex-grow flex flex-col gap-1 justify-center">
                <Link
                  className="cyan-hover p-1 rounded"
                  key={"live-stream-tab"}
                  href={`/content`}
                >
                  <NavButton
                    text="Live Stream"
                    icon={<LiveTv fontSize="small" />}
                    active={false}
                    hideText={hide}
                  />
                </Link>
                <Link
                  className="cyan-hover p-1 rounded"
                  key={"podcasts-tab"}
                  href={`/content`}
                >
                  <NavButton
                    text="Podcasts"
                    icon={<MicrophoneIcon height={20} />}
                    active={false}
                    hideText={hide}
                  />
                </Link>
              </div>
            </div>

            {/* ============ Small Screen Drawer ============ */}
            <animated.div
              style={{ ...smallScreenNavigationDrawerPopUpSprings }}
              className="md:hidden fixed z-50 flex flex-col bg-zinc-800/30 backdrop-blur border-2 border-zinc-800 top-1.5 bottom-1.5 left-1.5 rounded"
            >
              <div className="flex justify-between items-center p-2">
                <h3 className="p-2 text-cyan-400 font-bold">DMP</h3>
                <button
                  onClick={() => setHide(true)}
                  className="p-1 ring-1 rounded ring-stone-500/20 text-stone-500 cyan-hover duration-300"
                >
                  <XMarkIcon className="" height={20} />
                </button>
              </div>

              <div className="flex-grow flex flex-col p-1 gap-1">
                <Link
                  key={"home-tab"}
                  className="cyan-hover p-1 rounded"
                  href={`/content`}
                >
                  <NavButton
                    text="Home"
                    icon={<HomeIcon height={20} />}
                    active={["/content", "/content/"].includes(pathName)}
                    hideText={false}
                  />
                </Link>
                {navItems.map((navItem, index) =>
                  !navItem ? (
                    // <HtmlTooltip
                    //   key={index}
                    //   arrow
                    //   slotProps={{
                    //     arrow: {
                    //       sx: {
                    //         color: "white",
                    //       },
                    //     },
                    //   }}
                    //   title={
                    //     <div className="py-2">
                    //       {navItem.submenu.items.map((subMenuItem, idx) => (
                    //         <Link
                    //           style={{
                    //             display: "block",
                    //           }}
                    //           replace={true}
                    //           key={idx}
                    //           className="text-cyan-800"
                    //           href={`/content/${subMenuItem.path}`}
                    //         >
                    //           <NavButton
                    //             text={subMenuItem.title}
                    //             icon={subMenuItem.icon}
                    //             active={false}
                    //             hideText={false}
                    //           />
                    //         </Link>
                    //       ))}
                    //     </div>
                    //   }
                    //   placement="right-end"
                    // >
                    //   <div>
                    //     <NavButton
                    //       text={navItem.title}
                    //       icon={navItem.icon}
                    //       active={pathName.startsWith(
                    //         `/content${
                    //           navItem.path ? "/" + navItem.path : ""
                    //         }`
                    //       )}
                    //       hideText={hide}
                    //     />
                    //   </div>
                    // </HtmlTooltip>
                    <></>
                  ) : (
                    <Link
                      className="cyan-hover p-1 rounded"
                      key={index}
                      style={{ width: "100%" }}
                      href={`/content/${navItem.path}`}
                    >
                      <NavButton
                        icon={navItem.icon}
                        text={navItem.title}
                        active={pathName.startsWith(`/content/${navItem.path}`)}
                        hideText={false}
                      />
                    </Link>
                  )
                )}
                <div className="flex-grow flex flex-col gap-1 justify-center">
                  <Link
                    className="cyan-hover p-1 rounded"
                    key={"live-stream-tab"}
                    href={`/content`}
                  >
                    <NavButton
                      text="Live Stream"
                      icon={<LiveTv fontSize="small" />}
                      active={false}
                      hideText={hide}
                    />
                  </Link>
                  <Link
                    className="cyan-hover p-1 rounded"
                    key={"podcasts-tab"}
                    href={`/content`}
                  >
                    <NavButton
                      text="Podcasts"
                      icon={<MicrophoneIcon height={20} />}
                      active={false}
                      hideText={hide}
                    />
                  </Link>
                </div>
              </div>
            </animated.div>
            <div className="flex-grow relative">
              <div className="vertical-scrollbar absolute inset-y-0 left-0 right-1 flex flex-col">
                {/* <div className="px-4 py-4 sticky top-0 z-50 bg-gray-100">
                  <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    {breadcrumbs}
                  </Breadcrumbs>
                </div> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </AppProvider>
    </SnackbarProvider>
  );
}
