import styled from "styled-components";

export const CellWrapper = styled.div`
  width: auto;
  border-radius: 6px;
  position: relative;

  &.tetromino {
    border-top: 3px solid rgba(255, 255, 255, 0.1);
    border-left: 3px solid rgba(255, 255, 255, 0.1);
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    border-right: 3px solid rgba(0, 0, 0, 0.1);
    
    > div.sparkle {
      position: absolute;
      z-index: 10;
      width: 6px;
      height: 6px;
      left: -2px;
      top: -2px;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 4px 4px;
    }
  }

  &.tetromino.ghost div.sparkle {
    opacity: 0;
  }
 

  &.tetromino__i {
    background-color: var(--blue);
  }
  &.tetromino__j {
    background-color: var(--blueDark);
  }
  &.tetromino__l {
    background-color: var(--red);
  }
  &.tetromino__o {
    background-color: var(--yellow);
  }
  &.tetromino__s {
    background-color: var(--green);
  }
  &.tetromino__t {
    background-color: var(--purple);
  }
  &.tetromino__z {
    background-color: var(--pink);
  }
`
