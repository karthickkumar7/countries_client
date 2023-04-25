import ContinentCard from '@/components/shared/ContinentCard';
import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import client from '../../apollo-client';
import { Continent } from '../../types/countries';

const Continents = (props: any) => {
    return (
        <div className="py-4">
            <div className="flex flex-wrap gap-2">
                {props.data.getContinents.map((continent: Continent) => (
                    <ContinentCard
                        key={continent._id}
                        image={continent.image}
                        name={continent.name}
                        _id={continent._id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Continents;

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await client.query({
        query: gql`
            {
                getContinents {
                    _id
                    name
                    image
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
