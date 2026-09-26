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

export class TyrantrumEXXY70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 2.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Despotic Fang", powerType: PowerType.ABILITY, text: "Damage from this Pokémon's attacks isn't affected by any effects on your opponent's Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Fang", cost: [], damage: "190", text: "Discard 3 Energy attached to this Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Tyrantrum-EX";
  public fullName: string = "Tyrantrum-EX PR-XY XY70";
  public text: string = "Tyrantrum-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
