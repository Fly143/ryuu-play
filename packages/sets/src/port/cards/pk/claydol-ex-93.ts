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

export class ClaydolEx_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Baltoy";
  public hp: number = 120;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Type Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Claydol ex's type is Fighting until the end of your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Boom", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon." },
      { name: "Shadow Crush", cost: [], damage: "60", text: "You may discard a Psychic Energy card attached to Claydol ex. If you do, discard an Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "PK";
  public name: string = "Claydol ex";
  public fullName: string = "Claydol ex PK 93";
  public text: string = "Claydol ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
