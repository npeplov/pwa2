import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { useLoaderData } from "react-router";
import { PushNotification } from "~/utils/server/pwa-utils.server"; //"~/utils/server/pwa-utils.server.ts";

import { SendNotification } from "~/utils/client/pwa-utils.client";

const options = {
  body: "Hello, take a break and drink some water! 💧", // required!
  // badge: "/icons/notification-badge.png", // not required
  // icon: "/icons/app-icon.png", // not required
  silent: true, // required
  // image: "/images/Nature.png", // NEW! Not required
};

// let minutes = 30

// // executed in several ways
// setTimeout(() => {
//   SendNotification("Workout App", options)
// }, minutes * 60 * 1000)

// another method of execution

export const loader: LoaderFunction = async () => {
  return json({
    some: {
      data: "ok",
    },
  });
};

// export const action: ActionFunction = async () => {
//   console.log("ACTION CALL");
//   await PushNotification(
//     {
//       title: "Remix PWA",
//       body: "A server generated text body.",
//     },
//     1
//   );
//   return json({ ok: true });
// };

export default function PostRoute() {
  const data = useLoaderData();
  const onClick = () => {
    console.log("click");
    SendNotification("Exercise Tracker App", options);
  };
  return (
    <div>
      posts
      <div>{JSON.stringify(data)}</div>
      <button onClick={onClick}>Take a break!</button>
    </div>
  );
}
