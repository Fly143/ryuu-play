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

export class SabrinaSAlakazam_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Kadabra";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psylink", powerType: PowerType.ABILITY, text: "Sabrina's Alakazam always has a copy of every attack your Psychic Pokémon in play have (including their Energy costs and anything else required in order to use those attacks, such as discarding Energy cards). This power can't be used if Sabrina's Alakazam is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Burn", cost: [], damage: "60", text: "You can't use this attack during your next turn." }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Alakazam";
  public fullName: string = "Sabrina's Alakazam G2 16";
  public text: string = "Sabrina's Alakazam";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
