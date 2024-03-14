import React from 'react';
import { Container } from 'reactstrap';

import TablaUsuarios from './tablas/TablaUsuarios';
import TablaAlumnado from './tablas/TablaAlumnado';


const Crudshow = () => {

    return (
        <>
            <Container flex className='bg-white'>
                <div>
                    <TablaUsuarios/>
                </div>

                <div>
                    <TablaAlumnado/>
                </div>
            </Container>
        </>
    );
};

export default Crudshow;
