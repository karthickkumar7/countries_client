import client from '../../../apollo-client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { gql } from '@apollo/client';
import { Country } from '@/types/countries';

const CountryPage = ({
    data: { getCountry },
}: {
    data: { getCountry: Country };
}) => {
    const router = useRouter();

    return (
        <div className="py-4">
            <section className="max-w-[400px] h-[200px] bg-slate-200">
                <img
                    src={getCountry.image}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </section>
            <div className="mt-4 space-y-2 capitalize">
                <h4 className="text-lg font-semibold capitalize">
                    {getCountry.name}
                </h4>
                <p
                    className="cursor-pointer hover:underline underline-offset-1"
                    onClick={() =>
                        router.push(`/continent/${getCountry.continent._id}`)
                    }
                >
                    {getCountry.continent.name}
                </p>
                <p>capital - {getCountry.capital}</p>
                <p>population - {getCountry.population}</p>
                <p>gdp(nominal) - {getCountry.gdp} trillion</p>
                <p>rank by gdp(nominal) - {getCountry.rankByGdp}</p>
                <p>rank by population - {getCountry.rankByPopulation}</p>
                <p>rank by area - {getCountry.rankByArea}</p>
                <p>size - {getCountry.area} sqkm</p>
                <div className="max-w-[600px] space-y-2">
                    <p>languages</p>
                    <div className="flex flex-wrap gap-3">
                        {getCountry.languages.map((lang) => (
                            <div
                                key={lang}
                                className="px-2 py-1 rounded bg-green-600 text-white"
                            >
                                {lang}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { data } = await client.query({
        query: gql`
            query ($getCountryId: ID!) {
                getCountry(id: $getCountryId) {
                    _id
                    name
                    capital
                    area
                    population
                    gdp
                    languages
                    rankByArea
                    rankByPopulation
                    rankByGdp
                    image
                    continent {
                        name
                        _id
                    }
                }
            }
        `,
        variables: { getCountryId: params?.country },
    });

    return {
        props: {
            data,
        },
    };
};
