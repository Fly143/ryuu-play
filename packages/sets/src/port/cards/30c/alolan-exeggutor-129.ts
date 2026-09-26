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

export class AlolanExeggutor_129 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 150;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scale Up", powerType: PowerType.ABILITY, text: "If this Pokémon has 6 or more Grass Energy attached, it gets +250 HP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Drain", cost: [], damage: "150", text: "Heal 50 damage from this Pokémon" }
  ];
  public set: string = "30C";
  public name: string = "Alolan Exeggutor";
  public fullName: string = "Alolan Exeggutor 30C 129";
  public text: string = "Alolan Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 50);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
