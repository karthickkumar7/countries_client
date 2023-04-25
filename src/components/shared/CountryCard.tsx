import React from 'react';
import { useRouter } from 'next/router';

const CountryCard = ({
    name,
    continent,
    image,
    _id,
    continentId,
}: {
    name: string;
    continent: string;
    image: string;
    _id: string;
    continentId: string;
}) => {
    const router = useRouter();

    const goToCountry = (id: string) => {
        router.push(`/country/${id}`);
    };
    const goToContinent = (id: string) => {
        router.push(`/continent/${id}`);
    };

    return (
        <article className="min-w-[200px] w-full md:w-[200px] h-[220px] max-h-[400px] rounded shadow bg-slate-100">
            <div className="w-full h-[60%]">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="w-full h-[40%] p-2">
                <p
                    className="text-lg font-semibold cursor-pointer hover:underline underline-offset-1"
                    onClick={() => goToCountry(_id)}
                >
                    {name}
                </p>
                <p
                    className="text-lg cursor-pointer hover:underline underline-offset-1"
                    onClick={() => goToContinent(continentId)}
                >
                    {continent}
                </p>
            </div>
        </article>
    );
};

export default CountryCard;
