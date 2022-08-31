import { React, useRef } from 'react'
import validations from "../Validations/MainInfos";
import { useFormik } from 'formik';
import { Flex, FormControl, Heading, Button, FormLabel, Input, Select, useToast } from '@chakra-ui/react';
import axios from 'axios';

function GameMain() {
    const useForm = useRef();

    const toast = useToast();

    const {handleSubmit, handleChange, resetForm, values} = useFormik({
        initialValues: {
            gameName: '',
            category1: "",
            category2: "",
            gameDate: '',
            gameCover: '',
            gameView: 0,
            publisher: '',
            link: '',
        },
        onSubmit: (values, {resetForm}) => {
            
            axios.post("http://localhost:3000/gamesMain", values)
            .then(function (response){
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
            })
            toast({
                title: "Başarılı.",
                description: "Oyunun genel bilgileri başarılı şekilde eklendi",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
              });
        },
        validations,
    });
    return (
        <Flex
        flexDirection={"column"} 
        align={"center"} 
        width={"full"}>
            <Heading 
            size={"md"}>
                Genel Bilgiler
            </Heading>
            <FormControl 
            as={"form"} 
            ref={useForm} 
            marginTop={"5"} 
            onSubmit={handleSubmit} 
            isRequired>
                <FormLabel 
                fontWeight={"bold"}>
                    Oyun Adı
                </FormLabel>
                <Input 
                    value={values.gameName}
                    name={"gameName"}
                    onChange={handleChange}
                    variant='filled' 
                    shadow={"md"} 
                    backgroundColor={"gray.700"} 
                    type='text' 
                    fontWeight={"bold"} 
                    textAlign={"center"} 
                    color={"white"} 
                    _hover={{backgroundColor:"none"}}/>
                <FormLabel 
                fontWeight={"bold"}>
                    Tarih
                </FormLabel>
                <Input 
                    value={values.gameDate}
                    name={"gameDate"}
                    onChange={handleChange}
                    variant='filled' 
                    shadow={"md"} 
                    backgroundColor={"gray.700"} 
                    type='date' 
                    fontWeight={"bold"} 
                    textAlign={"center"} 
                    color={"white"} 
                    placeholder={""}
                    _hover={{backgroundColor:"none"}}/>
                <FormLabel 
                fontWeight={"bold"}>
                    Kategori (Maks 2)
                </FormLabel>
                <Flex>
                    <Select 
                    value={values.category1} 
                    name={"category1"} 
                    onChange={handleChange} 
                    placeholder=" " 
                    marginRight={"2"} 
                    color={"black"} 
                    bgColor={"white"} 
                    fontWeight={"bold"} 
                    width={{base: "35%", sm:"35%", md:"20%"}}>
                        <option value='Aksiyon'>Aksiyon</option>
                        <option value='Aksiyon'>FPS</option>
                        <option value='Korku'>Korku</option>
                        <option value='Macera'>Macera</option>
                        <option value='RPG'>RPG</option>
                        <option value='Simülasyon'>Simülasyon</option>
                        <option value='Spor'>Spor</option>
                        <option value='Strateji'>Strateji</option>
                    </Select>

                    <Select 
                    value={values.category2} 
                    name={"category2"} 
                    onChange={handleChange} 
                    placeholder=" " 
                    marginRight={"2"} 
                    color={"black"} 
                    bgColor={"white"} 
                    fontWeight={"bold"} 
                    width={{base: "35%", sm:"35%", md:"20%"}}>
                        <option value='Aksiyon'>Aksiyon</option>
                        <option value='Aksiyon'>FPS</option>
                        <option value='Korku'>Korku</option>
                        <option value='Macera'>Macera</option>
                        <option value='RPG'>RPG</option>
                        <option value='Simülasyon'>Simülasyon</option>
                        <option value='Spor'>Spor</option>
                        <option value='Strateji'>Strateji</option>
                    </Select>

                </Flex>
                <FormLabel 
                fontWeight={"bold"}>
                    Kapak Fotoğrafı
                </FormLabel>
                <Input 
                    value={values.gameCover}
                    name={"gameCover"}
                    onChange={handleChange}
                    variant='filled' 
                    shadow={"md"} 
                    backgroundColor={"gray.700"} 
                    type='text' 
                    fontWeight={"bold"} 
                    textAlign={"center"} 
                    color={"white"} 
                    placeholder={""}
                    _hover={{backgroundColor:"none"}}/>
                <FormLabel 
                fontWeight={"bold"}>
                    Paylaşan
                </FormLabel>
                <Input
                    value={values.publisher} 
                    name={"publisher"}
                    onChange={handleChange}
                    variant='filled' 
                    shadow={"md"} 
                    backgroundColor={"gray.700"} 
                    type='text' 
                    fontWeight={"bold"} 
                    textAlign={"center"} 
                    color={"white"} 
                    placeholder={""}
                    _hover={{backgroundColor:"none"}}/>  

                <FormLabel 
                fontWeight={"bold"}>
                    Link
                </FormLabel>
                <Input
                    value={values.link} 
                    name={"link"}
                    onChange={handleChange}
                    variant='filled' 
                    shadow={"md"} 
                    backgroundColor={"gray.700"} 
                    type='text' 
                    fontWeight={"bold"} 
                    textAlign={"center"} 
                    color={"white"} 
                    placeholder={""}
                    _hover={{backgroundColor:"none"}}/>

                <Button 
                    marginRight={"2"} 
                    marginTop={"2"} 
                    colorScheme={"red"} 
                    onClick={resetForm}>
                        Sıfırla
                </Button>
                        
                <Button 
                    marginLeft={"2"} 
                    marginTop={"2"} 
                    colorScheme={"blue"} 
                    type='submit'>
                        Gönder
                </Button> 
            </FormControl> 
                
        </Flex>
    )
}

export default GameMain