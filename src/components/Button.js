import styled from 'styled-components'

export const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:1px solid var(--lightblue);
border-color:${props=>props.cart?"var(--mainyellow)":"var(--lightblue)"};
color:${props=>props.cart?"var(--mainyellow)":"var(--lightblue)"};
margin-left:${props=>props.cart?"10px":"0px"};
margin-top:${props=>props.cart?"10px":"0px"};
border-radius:10px;
padding:0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover{
    background:${props=>props.cart?"var(--mainyellow)":"var(--lightblue)"};
    color:var(--mainblue);
}
&:focus{
    outline:none;
}
`