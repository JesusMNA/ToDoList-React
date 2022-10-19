import React from "react";
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