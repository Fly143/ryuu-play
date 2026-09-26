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

export class TyphlosionEx_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Quilava";
  public hp: number = 150;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bursting Up", powerType: PowerType.ABILITY, text: "Once during your turn when you play Typhlosion ex from your hand to evolve 1 of your Pokémon, count the number of your opponent's Benched Pokémon. You may search your deck for up to that number of Fire Energy cards and attach them to 1 of your Fire Pokémon. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Kindle", cost: [], damage: "80", text: "Discard an Energy card attached to Typhlosion ex and then discard an Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "UF";
  public name: string = "Typhlosion ex";
  public fullName: string = "Typhlosion ex UF 110";
  public text: string = "Typhlosion ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
