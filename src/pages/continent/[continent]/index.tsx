import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { gql } from '@apollo/client';
import client from '../../../apollo-client';
import { Continent } from '../../../types/countries';

const ContinentList = ({
    data: { getContinent },
}: {
    data: { getContinent: Continent };
}) => {
    const router = useRouter();

    const goToCountry = (id: string) => {
        router.push(`/country/${id}`);
    };

    return (
        <div className="py-4 space-y-4">
            <section className="max-w-[500px] h-[200px] bg-slate-200">
                <img
                    src={getContinent.image}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </section>
            <div className="space-y-2 capitalize font-semibold">
                <h2 className="text-lg font-semibold">{getContinent.name}</h2>
                <p>countries - 145 HARDCODED!</p>
                <p>size - {getContinent.area} sqkm</p>
                <p>rank by size - {getContinent.rankByArea}</p>
                <p>population - {getContinent.population} people</p>
                <p>rank by population - {getContinent.rankByPopulation}</p>
            </div>
            <div className="space-y-2">
                <p className="text-lg font-semibold">
                    top countries by population
                </p>
                <ul className="flex space-x-1">
                    {new Array(5).fill('').map((el, i) => (
                        <li
                            key={i}
                            className="w-[100px] h-[60px] cursor-pointer bg-slate-100"
                        >
                            india
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-2">
                <p className="text-lg font-semibold">top countries by gdp</p>
                <ul className="flex space-x-1">
                    {new Array(5).fill('').map((el, i) => (
                        <li
                            key={i}
                            className="w-[100px] h-[60px] cursor-pointer bg-slate-100"
                        >
                            china
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {getContinent.countries.map((el) => (
                        <li
                            key={el._id}
                            className="hover:underline underline-offset-1 cursor-pointer even:bg-slate-100"
                            onClick={() => goToCountry(el._id)}
                        >
                            {el.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContinentList;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { data } = await client.query({
        query: gql`
            query ($getContinentId: ID!) {
                getContinent(id: $getContinentId) {
                    _id
                    name
                    area
                    population
                    image
                    gdp
                    rankByArea
                    rankByGdp
                    rankByPopulation
                    countries {
                        _id
                        name
                    }
                }
            }
        `,
        variables: { getContinentId: params?.continent },
    });

    return {
        props: {
            data,
        },
    };
};
