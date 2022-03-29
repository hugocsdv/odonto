import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Anchor } from '../../../common/anchor';
import { Checkbox } from '../../../common/checkbox';
import { Text } from '../../../common/text';
import { StyledInput } from '../../../common/inputs/styledInput';
import { ButtonLoading } from '../../../common/buttonLoading';
import { AppRouters } from '../../../../utils/constants';
import {
  Wrapper,
  Content,
  LeftSide,
  Image,
  RightSide,
  LoginContent,
  FormsTitle,
  Forms,
  SubField,
  NewAccountOrAlreadyHaveAnAccount,
} from '../styles';

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const schema = Yup.object().shape({
  email: Yup.string().required('email é necessário').email(),
  password: Yup.string().required('senha é necessária'),
});

export const Login = () => {
  const handleSubmit = async () => {};

  return (
    <Wrapper>
      <Content>
        <LeftSide>
          <Image src="/img/png/login-background.png" />
        </LeftSide>
        <RightSide>
          <LoginContent>
            <FormsTitle>
              <Text type="h4">Entrar na conta</Text>
              <Text type="subtitle1" secondary>
                Faça o login para continuar
              </Text>
            </FormsTitle>

            <Formik
              initialValues={initialValues}
              onSubmit={() => {''}}
              validationSchema={schema}
            >
              {({ errors, handleChange }) => (
                <Form>
                  <Forms>
                    <StyledInput
                      name="email"
                      label="Email"
                      margin="normal"
                      type="email"
                      onChange={handleChange}
                      helperText={errors.email}
                      required
                    />

                    <StyledInput
                      name="password"
                      label="Senha"
                      margin="normal"
                      type="password"
                      onChange={handleChange}
                      helperText={errors.password}
                      required
                    />

                    <SubField>
                      <Checkbox
                        name="rememberMe"
                        label="Manter-se conectado"
                        onChange={handleChange}
                      />
                      <Anchor
                        label="Esqueceu a senha?"
                        href={AppRouters.home}
                      />
                    </SubField>

                    <ButtonLoading
                      loading={false}
                      variant="contained"
                      size="large"
                      type="submit"
                    >
                      ENTRAR
                    </ButtonLoading>
                  </Forms>
                </Form>
              )}
            </Formik>

            <NewAccountOrAlreadyHaveAnAccount>
              <Text type="subtitle2" textAlign="center">
                Não possui conta ?{' '}
                <Anchor label="Criar conta" href={AppRouters.home} />
              </Text>
            </NewAccountOrAlreadyHaveAnAccount>
          </LoginContent>
        </RightSide>
      </Content>
    </Wrapper>
  );
};
