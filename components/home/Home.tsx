import styles from "@/styles/page.module.css";
import { Locale } from "@/i18n-config";
import { useEffect, useState } from "react";
import type { Literals } from "@/types/fetypes";

type HomeProps = {
  literals: Literals;
};

export default function Home({ literals }: HomeProps) {
  // const [inRoom, setInRoom] = useState<boolean>(false);
  // const [roomid, setRoomid] = useState<string>("");
  // const [pasteContent, setPasteContent] = useState<string>("");

  // const [pcs, setPcs] = useState<Map<string, RTCPeerConnection>>(new Map());
  // const [dcs, setDcs] = useState<Map<string, RTCDataChannel>>(new Map());
  // const [socket, setSocket] = useState<Socket | undefined>();
  // const [isRoomError, setIsRoomError] = useState<boolean>(false);

  return (
    <main className={styles.main}>
      <h1>{literals.index.title}</h1>
    </main>
  );
}
