import * as React from 'react';
import reactLogo from './assets/react.svg'
import { Box, Button, Center, Text  } from '@chakra-ui/react';
import { useNavigate , useLocation } from 'react-router-dom';
import * as ethers from 'ethers';


import axios from "axios";
import { UserModel } from "../../infrastracture/model/userModel";
import { User } from '../../domain/entities/user';

import { UserRepository } from "../../domain/repositories/userRepository";
import { userRepositoryProvider } from '../../core/provider';


type Props = {

}



export const TopPage: React.FC<Props> = (props) => {
    const nav = useNavigate();

    React.useEffect(()=>{
        console.log(`useEffect topPage`);
    },[]);


    return (
        <>
            <Center
                mt={`200px`}
            >
                <Text
                    color={`black`}
                    fontWeight={`bold`}
                >TOPページです</Text>
            </Center>

            <Center
                mt={`50px`}
                >
                <Button
                    fontWeight={`bold`}
                    onClick={()=>{
                        nav(`/2` ,{state:{id:`2`}});
                    }}
                >
                    ページ切り替え
                </Button>
            </Center>

            <Center
                mt={`20px`}
            >
                <Button
                    backgroundColor={`yellow.200`}
                    onClick={async()=>{
                        const value = await userRepositoryProvider.getUsers(0,1);
                        console.log(value)
                    }}
                >
                    ユーザー情報を取得する
                </Button>
            </Center>


        </>
    );
}

