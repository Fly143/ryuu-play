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

export class Gengar_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 110;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fainting Spell", powerType: PowerType.ABILITY, text: "Once during your opponent's turn, if Gengar would be Knocked Out by damage from an attack, you may flip a coin. If heads, the Defending Pokémon is Knocked Out.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Room", cost: [], damage: "", text: "Put 3 damage counters on 1 of your opponent's Pokémon. If that Pokémon has any Poké-Powers, put 6 damage counters on that Pokémon instead." },
      { name: "Poltergeist", cost: [], damage: "30×", text: "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand." }
  ];
  public set: string = "PL";
  public name: string = "Gengar";
  public fullName: string = "Gengar PL 18";
  public text: string = "Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
