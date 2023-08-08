import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export default function TodoList({ todos, deleteBtn }) {
    //taking props new method

    //badge if the todo len is zero
    if (!todos.length) {
        return (<Badge colorScheme='green' p='4' m='4' borderRadius='lg' >Empty List</Badge>)
    }
    return (
        <VStack
            divider={<StackDivider />}
            borderColor='grey.100'
            borderWidth='2px'
            p='4'
            borderRadius='lg'
            w='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', "xl": '40vw' }}
            //for diffrent types of screenes
            alignItems='stretch'
        >
            {
                todos.map(
                    h =>
                    (
                        <HStack key={h.id}>
                            <Text>{h.body}</Text>
                            <Spacer />
                            <IconButton
                                icon={<FaTrash />}
                                isRound='true'
                                onClick={() => deleteBtn(h.id)}
                            />
                        </HStack>
                    )
                )
            }
        </VStack>
    )
}