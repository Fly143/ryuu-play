import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class JynxTG04 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Selfish Lips", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon V, your opponent can't take any Prize cards for it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Assault", cost: [], damage: "10+", text: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon." }
  ];
  public set: string = "SIT";
  public name: string = "Jynx";
  public fullName: string = "Jynx SIT TG04";
  public text: string = "Jynx";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerDefendingDamageCounter(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
