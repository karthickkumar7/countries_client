import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
    name: string;
    image: string;
    _id: string;
}

const ContinentCard = ({ name, image, _id }: Props) => {
    const router = useRouter();

    return (
        <article className="w-full md:w-[200px] h-[200px] max-h-[400px] rounded shadow bg-slate-100">
            <div className="w-full h-[70%]">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="w-full h-[30%] p-2">
                <p
                    className="text-lg font-semibold cursor-pointer capitalize hover:underline underline-offset-1"
                    onClick={() => router.push(`/continent/${_id}`)}
                >
                    {name}
                </p>
            </div>
        </article>
    );
};

export default ContinentCard;
