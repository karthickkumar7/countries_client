import CountryCard from '@/components/shared/CountryCard';
import { Country } from '@/types/countries';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import client from '../apollo-client';

export default function Home({
    data: { getCountries },
}: {
    data: { getCountries: Country[] };
}) {
    return (
        <main>
            <div className="px-2 py-4 flex justify-between">
                <p>172 countries in database</p>
                <form className="hidden md:block space-x-2 mr-8 text-sm">
                    <input
                        type="text"
                        placeholder="search for countries"
                        className="px-4 py-1 outline-none rounded-full ring-1 ring-blue-500 focus:bg-blue-50"
                    />
                    <button type="submit">search</button>
                </form>
            </div>
            <section className="flex flex-wrap gap-2">
                {getCountries.map((country) => (
                    <CountryCard
                        key={country._id}
                        name={country.name}
                        _id={country._id}
                        continent={country.continent.name}
                        continentId={country.continent._id}
                        image={country.image}
                    />
                ))}
            </section>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await client.query({
        query: gql`
            {
                getCountries {
                    _id
                    name
                    image
                    continent {
                        _id
                        name
                    }
                }
            }
        `,
    });

    return {
        props: {
            data,
        },
    };
};
