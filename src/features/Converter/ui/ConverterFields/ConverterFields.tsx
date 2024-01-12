import { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import { Controller, FieldValues, useForm } from "react-hook-form";

import {
  useConverterStore,
  useGetAllCoins,
  useGetTopCoins,
} from "features/Converter";

import s from "./styles.module.sass";

import { Button, Input, Selector } from "shared/ui";

export const ConverterFields = observer(() => {
  const [searchHaveValue, setSearchHaveValue] = useState<string>("");
  const [searchWantValue, setSearchWantValue] = useState<string>("");
  const [totalCoins, setTotalCoins] = useState<string[]>([]);
  const [options, setOptions] = useState<any[]>([]);

  const store = useConverterStore();
  const { allCoins } = useGetAllCoins();
  const { topCoins } = useGetTopCoins();

  const {
    handleSubmit,
    register,
    control,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm<FieldValues>({
    defaultValues: {
      want: "",
      have: "",
      quality: "",
    },
  });

  const WatchHave = watch("have");
  const WatchWant = watch("want");
  const WatchQuality = watch("quality");

  useEffect(() => {
    if (searchHaveValue) {
    }
  }, [searchHaveValue]);

  const onSubmit = (data: any) => {
    const info = {
      have: data.have.label,
      want: data.want.label,
      haveCount: data.quality,
    };
    store.handleSetConverterInfo(info);
    const table = document.querySelector("#table");
    if (table) table.scrollIntoView();
  };

  useEffect(() => {
    if (store.have) {
      setValue("have", {
        value: store.have.toLowerCase(),
        label: store.have,
      });
    }
  }, [store.have]);

  useEffect(() => {
    if (store.want) {
      setValue("want", {
        value: store.want.toLowerCase(),
        label: store.want,
      });
    }
  }, [store.want]);

  useEffect(() => {
    if (WatchHave) {
      store.handleSetHave(WatchHave.label);
    }
    clearErrors("have");
  }, [WatchHave]);

  useEffect(() => {
    if (WatchWant) {
      store.handleSetWant(WatchWant.label);
    }
    clearErrors("want");
  }, [WatchWant]);

  useEffect(() => {
    if (WatchWant && WatchHave && !WatchQuality) {
      setValue("quality", "1");
    }
  }, [WatchWant, WatchHave, WatchQuality]);

  useEffect(() => {
    clearErrors("quality");
  }, [WatchQuality]);

  useEffect(() => {
    const tempArr = [...allCoins, ...topCoins];
    //@ts-ignore
    setTotalCoins([...new Set(tempArr)]);
  }, [allCoins, topCoins]);

  useEffect(() => {
    if (searchHaveValue || searchWantValue) {
      setOptions(
        totalCoins.map((option) => ({
          value: option.toLowerCase(),
          label: option,
        }))
      );
    } else {
      setOptions(
        topCoins.map((option) => ({
          value: option.toLowerCase(),
          label: option,
        }))
      );
    }
  }, [searchHaveValue, searchWantValue, topCoins, totalCoins]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.fields}>
      <Controller
        control={control}
        name="have"
        rules={{ required: true }}
        render={({ field: { onChange } }) => {
          const handleChange = (e: any) => {
            if (e) {
              if (e.label === store.want) return;
              onChange(e);
            }
          };
          return (
            <Selector
              onInputChange={(e) => setSearchHaveValue(e)}
              options={options}
              onChange={handleChange}
              value={WatchHave}
              placeholder="I Have"
              name="have"
              errors={errors}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="want"
        rules={{ required: true }}
        render={({ field: { onChange } }) => {
          const handleChange = (e: any) => {
            if (e) {
              if (e.label === store.have) return;
              onChange(e);
            }
          };
          return (
            <Selector
              onInputChange={(e) => setSearchWantValue(e)}
              options={options}
              onChange={handleChange}
              value={WatchWant}
              placeholder="I Want"
              name="want"
              errors={errors}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="quality"
        rules={{ required: true, pattern: /^[0-9.]+$/ }}
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              id="quality"
              errors={errors}
              register={register}
              required
              placeholder="Quality"
              value={value.replace(/[^0-9.]/g, "")}
            />
          );
        }}
      />

      <Button onClick={() => {}} type="submit" className={s.updateBtn}>
        Update
      </Button>
    </form>
  );
});
