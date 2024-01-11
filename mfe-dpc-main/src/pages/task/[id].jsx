"use client";

import React from "react";
import dynamic from "next/dynamic";

const RemoteTaskDetail = dynamic(() => import("task/taskDetail"));

export function TaskDetail(props) {
  return (
    <>
      <RemoteTaskDetail {...props} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const remotePage = await import("task/taskDetail");

  if (remotePage.getServerSideProps) {
    return remotePage.getServerSideProps(ctx);
  }

  return {
    props: {},
  };
};

export default TaskDetail;
