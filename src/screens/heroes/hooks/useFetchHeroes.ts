import {useState, useEffect, useRef} from 'react';
import {
  HeroSchema,
  Hero,
  AppereanceSchema,
  WorkSchema,
  ImagesSchema,
  ConnectionsSchema,
  BiographySchema,
  PowerstatsSchema,
} from '../models/hero';
import NetInfo from '@react-native-community/netinfo';
import Realm from 'realm';

export const useFetchHeroes = (url: string) => {
  const isMounted = useRef(true);
  const [state, setState] = useState<{
    data: null | any;
    loading: boolean;
    error: null | any;
  }>({data: null, loading: true, error: null});

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const saveHeroesRecords = async (data: any) => {
    const realm = await Realm.open({
      schema: [
        HeroSchema,
        AppereanceSchema,
        WorkSchema,
        ImagesSchema,
        ConnectionsSchema,
        BiographySchema,
        PowerstatsSchema,
      ],
    });
    const heroes = realm.objects('Hero');

    if (heroes.length === 0) {
      try {
        realm.write(() => {
          data.forEach((hero: Hero) => {
            realm.create('Hero', hero);
          });
        });
      } catch (e) {
        console.log('Error on creation', e);
      }
    }
  };

  const getSavedHeroes = async () => {
    const realm = await Realm.open({
      schema: [
        HeroSchema,
        AppereanceSchema,
        WorkSchema,
        ImagesSchema,
        ConnectionsSchema,
        BiographySchema,
        PowerstatsSchema,
      ],
    });
    const heroes = realm.objects('Hero').toJSON();
    return heroes;
  };

  useEffect(() => {
    setState({data: null, loading: true, error: null});
    async function fetchData() {
      const connectionState = await NetInfo.fetch();

      if (connectionState.isConnected) {
        const resp = await fetch(url);
        const data = await resp.json();
        saveHeroesRecords(data);
        setState({
          loading: false,
          error: null,
          data,
        });
      } else {
        console.log('Gettiing saved heoes');
        const data = await getSavedHeroes();
        setState({
          loading: false,
          error: null,
          data,
        });
      }
    }
    fetchData();
  }, [url]);

  return state;
};
