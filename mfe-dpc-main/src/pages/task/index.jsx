import React from "react";
import dynamic from "next/dynamic";

const RemoteTaskList = dynamic(() => import("task/taskList"));

export function TaskList(props) {
  return (
    <>
      <RemoteTaskList {...props} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const remotePage = await import("task/taskList");

  if (remotePage.getServerSideProps) {
    return remotePage.getServerSideProps(ctx);
  }

  return {
    props: {},
  };
};

export default TaskList;
