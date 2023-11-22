import { ChangeEvent, useEffect } from "react";
import { useCart } from "../../../../hooks/useCart";
import { useAddress } from "../../../../hooks/useAddress";
import { useNavigate } from "react-router-dom";
import { PaymentFormData } from "../..";
import { useFormContext } from "react-hook-form";

import { FormContainer, Form, InputWrapper } from "./styles";

interface CepApiResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: string;
}

export interface OrderType {
  id: string;
  address: {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    numero: string;
    uf: string;
    complemento?: string;
  };
  paymentInfo: {
    method: string;
  };
}

export function AddressForm() {
  const navigate = useNavigate();
  const { addressData, saveUserAddress } = useAddress();
  const { clearCart } = useCart();

  const {
    register,
    setValue,
    clearErrors,
    setError,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<PaymentFormData>();

  function handleCepChange(event: ChangeEvent<HTMLInputElement>) {
    const cepValue = event.target.value;
    const isCepValid = cepValue.length === 8 && +cepValue;

    if (isCepValid) {
      fetch(`https://viacep.com.br/ws/${cepValue}/json`)
        .then((response) => response.json())
        .then((responseInJSON: CepApiResponse) => {
          if (responseInJSON.erro) {
            setError("cep", {
              type: "Not Found",
              message: "O CEP digitado não foi encontrado!",
            });
            throw new Error("Cep não encontrado.");
          }

          clearErrors("cep");

          const { logradouro, complemento, bairro, localidade, uf } =
            responseInJSON;

          setValue("logradouro", logradouro);
          setValue("complemento", complemento);
          setValue("bairro", bairro);
          setValue("localidade", localidade);
          setValue("uf", uf);
        });
    }
  }

  function handleNewOrder({ method, ...addressInfo }: PaymentFormData) {
    const newOrder: OrderType = {
      id: crypto.randomUUID(),
      address: {
        ...addressInfo,
      },
      paymentInfo: {
        method,
      },
    };

    saveUserAddress({
      ...addressInfo,
    });

    if (isValid) {
      navigate("/success", {
        state: newOrder,
      });
    }

    clearCart();
  }

  useEffect(() => {
    if (addressData.cep) {
      const { cep, logradouro, complemento, bairro, localidade, uf, numero } =
        addressData;

      setValue("cep", cep);
      setValue("logradouro", logradouro);
      setValue("complemento", complemento);
      setValue("bairro", bairro);
      setValue("localidade", localidade);
      setValue("numero", numero);
      setValue("uf", uf);
    }
  }, [addressData, setValue]);

  return (
    <FormContainer>
      <Form id="address-form" onSubmit={handleSubmit(handleNewOrder)}>
        <InputWrapper>
          <input
            type="text"
            placeholder="CEP"
            autoFocus
            {...register("cep", { required: true })}
            onChange={handleCepChange}
          />
          {errors.cep && <p>{errors.cep.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <input
            type="text"
            placeholder="Rua"
            {...register("logradouro", { required: true })}
          />
        </InputWrapper>

        <InputWrapper>
          <input
            type="text"
            placeholder="Número"
            {...register("numero", { required: true })}
          />
        </InputWrapper>

        <InputWrapper>
          <input
            type="text"
            placeholder="Complemento"
            {...register("complemento", { required: true })}
            data-optional="true"
          />
        </InputWrapper>

        <InputWrapper>
          <input
            type="text"
            placeholder="Bairro"
            {...register("bairro", { required: true })}
          />
        </InputWrapper>

        <InputWrapper>
          <input
            type="text"
            placeholder="Cidade"
            {...register("localidade", { required: true })}
          />
        </InputWrapper>

        <InputWrapper>
          <input
            type="text"
            placeholder="UF"
            {...register("uf", { required: true })}
            maxLength={2}
          />
        </InputWrapper>
      </Form>
    </FormContainer>
  );
}
