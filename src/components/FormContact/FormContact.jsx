import { Button, Center, FormLabel, Input } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContactsThunk } from 'redux/contacts/thunk';

const FormContact = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', number: '' } });

  // const name = watch('name');
  // const number = watch('number');

  const dispatch = useDispatch();
  return (
    <form
      onSubmit={handleSubmit(data => {
        dispatch(addContactsThunk(data));

        closeModal();
      })}
    >
      <FormLabel>Name</FormLabel>
      <Input
        {...register('name', {
          required: 'This is required',
          minLength: {
            value: 6,
            message: 'Min length is 6',
          },
        })}
        type="text"
        placeholder="name"
        size="md"
        mb={4}
        autoComplete="name"
      />
      <p>{errors.name?.message}</p>
      <FormLabel>Number</FormLabel>
      <Input
        {...register('number', {
          required: true,
          minLength: {
            value: 6,
            message: 'Min length is 6',
          },
        })}
        type="tel"
        placeholder="phone number"
        size="md"
        mb={4}
        autoComplete="phone number"
      />
      <p>{errors.number?.message}</p>

      <Center>
        <Button type="submit" colorScheme="red" size="md" width="100px">
          Add contact
        </Button>
      </Center>
    </form>
  );
};

export default FormContact;
