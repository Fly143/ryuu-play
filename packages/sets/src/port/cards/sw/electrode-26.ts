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

export class Electrode_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Voltorb";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Shift", powerType: PowerType.ABILITY, text: "Once during your turn, if Electrode would be Knocked Out by damage from an attack, you may use this power. Electrode isn't discarded. Instead, attach it as an Energy card to 1 of your Pokémon. While attached, this card is a Special Energy card and provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ion Blast", cost: [], damage: "40+", text: "You may do 40 damage plus 60 more damage. If you do, Electrode does 100 damage to itself." }
  ];
  public set: string = "SW";
  public name: string = "Electrode";
  public fullName: string = "Electrode SW 26";
  public text: string = "Electrode";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -100, 1);
    }
    return state;
  }
}
