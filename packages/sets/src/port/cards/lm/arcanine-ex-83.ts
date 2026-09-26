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

export class ArcanineEx_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Growlithe";
  public hp: number = 120;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fire Remedy", powerType: PowerType.ABILITY, text: "Whenever you attach a Fire Energy from your hand to Arcanine ex, remove 1 damage counter and all Special Conditions from Arcanine ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Overrun", cost: [], damage: "30", text: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Flame Swirl", cost: [], damage: "100", text: "Discard 2 Fire Energy or 1 React Energy card attached to Arcanine ex." }
  ];
  public set: string = "LM";
  public name: string = "Arcanine ex";
  public fullName: string = "Arcanine ex LM 83";
  public text: string = "Arcanine ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
