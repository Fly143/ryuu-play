import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Spiritomb_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Keystone Seal", powerType: PowerType.ABILITY, text: "As long as Spiritomb is your Active Pokémon, each player can't play any Trainer cards from his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Grace", cost: [], damage: "", text: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Spiritomb. Shuffle your deck afterward." },
      { name: "Will-o'-the-wisp", cost: [], damage: "10", text: "" }
  ];
  public set: string = "AR";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb AR 32";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
