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

export class Gengar_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shadow Curse", powerType: PowerType.ABILITY, text: "If Gengar would be Knocked Out by damage from an opponent's attack, you may put 3 damage counters on 1 of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cursed Reaction", cost: [], damage: "", text: "Put 2 damage counters on your opponent's Pokémon in any way you like. If Gengar has any React Energy cards attached to it, put 4 damage counters instead." },
      { name: "Super Psy Bolt", cost: [], damage: "60", text: "" }
  ];
  public set: string = "LM";
  public name: string = "Gengar";
  public fullName: string = "Gengar LM 5";
  public text: string = "Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
