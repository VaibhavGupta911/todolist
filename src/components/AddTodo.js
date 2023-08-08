import { Button, HStack, Input,useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function AddTodo({ addTodo }) {
    const warning = useToast();//toast com of chakara
    function handleSubmit(e) {
        e.preventDefault();//prevent reload on submit
        if (!content) {
            warning({
                title: 'Empty List',
                description: "Please Enter List",
                status: 'warning',
                duration: 1800,
                isClosable: true,
            });
            return
            //we r returning coz dont wanna run below codes
        }
        const todo =
        {
            id: nanoid(),
            body: content,
        };
        addTodo(todo);
        //now we are passing todo which have id and content
        //to addTodo Props which will add to list using spread 
        //... operator
        setContent('')//clear content
    }

    const [content, setContent] = useState('');
    return (
        <form onSubmit={handleSubmit} >
            <HStack mt='8'>
                <Input
                    variant='outline'
                    placeholder="Enter Work"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    colorScheme="pink"
                    px='8'
                    type='submit'
                >
                    Add Todo
                </Button>
            </HStack>
        </form>
    )
}