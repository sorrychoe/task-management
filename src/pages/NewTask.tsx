import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import React from 'react';

export function NewTask(): JSX.Element {
  const navigate = useNavigate()  
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any): void => {
    navigate('/')
  }


  return (
    <Container>
      <Header>
        <Link to="/"><img src="/assets/close.png" /></Link>
        <h1>Create New Task</h1>
      </Header>
      <Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input>
            <label>Theme</label>
            <input type="text" {...register("title", { required: true })} />
          </Input>
          <Input>
            <label>Time</label>
            <input type="time" {...register("time", { required: true })} />
          </Input>
          <Input>
            <label>Description</label>
            <textarea {...register("description")} />
          </Input>
          <SubmitButton>Create</SubmitButton>
        </form>
      </Body>
    </Container>
  );
}
  



const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #ffffff;
`


const Header = styled.header`
  position: relative;

  a {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  h1 {
    margin: 16px 0;
    color: #202635;
    text-align: center;
    font-family: Mulish;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`


const Body = styled.div`
  flex: 1;
  padding: 24px;
  border-radius: 20px;
  background: #202635;
`


const Input = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #D9D9D9;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  input, textarea {
    color: #FFF;
    font-family: Mulish;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;

    margin-bottom: 24px;
  }
`

const SubmitButton = styled.button`
  border-radius: 15px;
  background: #FFF;
  padding: 18px;
  width: 100%;

  text-align: center;
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`
