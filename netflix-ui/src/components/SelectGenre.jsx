import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";
// import { genres } from '../store';

export default function SelectGenre({ genres, type }) {
    const dispatch = useDispatch()
  return (
    <>
    {/* <div className="flex" onChange={e=>{dispatch(fetchDataByGenre({genre:e.target.value,type}))}}>
      {genres.map((genre) => {
        return (
          <h2>
        </h2>
        );
      })}
    </div> */}
  
    <Select className="flex" onChange={e=>{dispatch(fetchDataByGenre({genre:e.target.value,type}))}}>
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>

    </>
  );
}
const Select = styled.select`
    cursor: pointer;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 5px 5px;
    border-radius: 0;
    margin-left: 3rem;

    option{
      background-color: black;
    }
`;