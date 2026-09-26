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

export class Orbeetle_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dottler";
  public hp: number = 130;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bug's Radar", powerType: PowerType.ABILITY, text: "Once during your turn, you may look at the top 3 cards of your opponent's deck and put them back in any order.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Brainwave", cost: [], damage: "90+", text: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon." }
  ];
  public set: string = "SSH";
  public name: string = "Orbeetle";
  public fullName: string = "Orbeetle SSH 19";
  public text: string = "Orbeetle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
