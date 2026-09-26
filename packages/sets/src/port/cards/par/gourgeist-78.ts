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

export class Gourgeist_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pumpkaboo";
  public hp: number = 110;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Startling Pumpkin", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, discard 2 random cards from your opponent's hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Bind", cost: [], damage: "100", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "PAR";
  public name: string = "Gourgeist";
  public fullName: string = "Gourgeist PAR 78";
  public text: string = "Gourgeist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
