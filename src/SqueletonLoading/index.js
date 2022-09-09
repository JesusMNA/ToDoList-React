import React from "react";
import { TodoContext } from "../TodoContext";
import './squeletonLoading.css'

function SqueletonLoading() {
  return (
    <div className="LoadingTodo">
      <div className="LoadingTodo-containter"></div>
      <div className="LoadingTodo-containter"></div>
      <div className="LoadingTodo-containter"></div>
    </div>
  );
}

export { SqueletonLoading }