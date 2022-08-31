import { React, useRef } from 'react'
import validations from "../Validations/DetailInfos";
import { useFormik } from 'formik';
import { Flex, FormControl, Heading, Button, FormLabel, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';


function GameDetails() {
    const useForm = useRef();
    
    const toast = useToast();

    const {handleSubmit, handleChange, resetForm, values} = useFormik({
        initialValues: {
            link: "",
            size: "",
            gameLink: "",
            youtube: "",
            publishDate: "",
            os: "",
            processor: "",
            ram: "",
            storage: "",
            displayCard: "",
            vram: "",
            gameDescription: "",
            gamePhoto1: "",
            gamePhoto2: "",
            gamePhoto3: "",
            gamePhoto4: "",
            gamePhoto5: "",
        },
        onSubmit: (values, {resetForm}) => {
            values.gameID = localStorage.getItem("id")
            axios.post("http://localhost:3000/gamesDetail", values)
            .then(function (response){
                console.log(response.data)
            })
            .catch(function (error){
                console.log(error)
            })
            toast({
                title: "Başarılı.",
                description: "Oyunun detay bilgileri başarılı şekilde eklendi.",
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
                Detay Bilgileri
            </Heading>
            <FormControl 
            as={"form"} 
            ref={useForm} 
            marginTop={"5"} 
            onSubmit={handleSubmit} 
            isRequired>
                <FormLabel 
                fontWeight={"bold"}>
                    Link (2)
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
                <FormLabel 
                fontWeight={"bold"}>
                    Boyut
                </FormLabel>
                <Input
                    value={values.size} 
                    name={"size"}
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
                    Mağaza Linki
                </FormLabel>
                <Input
                    value={values.gameLink} 
                    name={"gameLink"}
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
                    YouTube Linki
                </FormLabel>
                <Input
                    value={values.youtube} 
                    name={"youtube"}
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
                    Yayınlanma Tarihi
                </FormLabel>
                <Input
                    value={values.publishDate} 
                    name={"publishDate"}
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
                    İşletim Sistemi
                </FormLabel>
                <Input
                    value={values.os} 
                    name={"os"}
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
                    İşlemci
                </FormLabel>
                <Input
                    value={values.processor} 
                    name={"processor"}
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
                    RAM
                </FormLabel>
                <Input
                    value={values.ram} 
                    name={"ram"}
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
                    Depolama Alanı
                </FormLabel>
                <Input
                    value={values.storage} 
                    name={"storage"}
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
                    Ekran Kartı
                </FormLabel>
                <Input
                    value={values.displayCard} 
                    name={"displayCard"}
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
                    VRAM
                </FormLabel>
                <Input
                    value={values.vram} 
                    name={"vram"}
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
                    Game Description
                </FormLabel>
                <Input
                    value={values.gameDescription} 
                    name={"gameDescription"}
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
                    Fotoğraf (1)
                </FormLabel>
                <Input
                    value={values.gamePhoto1} 
                    name={"gamePhoto1"}
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
                    Fotoğraf (2)
                </FormLabel>
                <Input
                    value={values.gamePhoto2} 
                    name={"gamePhoto2"}
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
                    Fotoğraf (3)
                </FormLabel>
                <Input
                    value={values.gamePhoto3} 
                    name={"gamePhoto3"}
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
                    Fotoğraf (4)
                </FormLabel>
                <Input
                    value={values.gamePhoto4} 
                    name={"gamePhoto4"}
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
                    Fotoğraf (5)
                </FormLabel>
                <Input
                    value={values.gamePhoto5} 
                    name={"gamePhoto5"}
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

export default GameDetails