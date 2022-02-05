import React, {useEffect} from "react";
import {gql, useQuery} from "@apollo/client";

export default function Planets() {
    const { loading, error, data } = useQuery(gql`
        {
            allPlanets {
                planets {
                    id
                    name
                    terrains
                }
            }
        }
    `);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return(
        <div>
            <div>{data.allPlanets.planets.map(res => {
                return (
                    <div>{res.name}</div>
                )
            })}</div>
        </div>
    )
}