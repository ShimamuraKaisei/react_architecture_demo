import * as React from 'react';
import reactLogo from './assets/react.svg'
import { Box, Center, Text ,Button } from '@chakra-ui/react';
import { useNavigate , useLocation } from 'react-router-dom';


type Props = {

}

export const TestPage: React.FC<Props> = (props) => {
    const location = useLocation();
    const nav = useNavigate();
    let prevPageData = location.state as {id:string};

    React.useEffect(()=>{
        console.log(`useEffect testPage`);
    },[]);
    return (
        <>
            <>
                <Center
                    mt={`200px`}
                >
                    <Text
                        color={`black`}
                        fontWeight={`bold`}
                    >テストページです</Text>
                </Center>

                <Center
                    mt={`50px`}
                    >
                    <Button
                        fontWeight={`bold`}
                        onClick={()=>{nav(`/`)}}
                    >
                        ページ切り替え
                    </Button>
                </Center>

                <Center>
                    <Text
                        color={`black`}
                        fontWeight={`bold`}
                        mt={`10px`}
                    >ページ番号：{prevPageData.id}</Text>
                </Center>
            </>
        </>
    );
}

